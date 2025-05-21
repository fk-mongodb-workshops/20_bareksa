
#
# Configure the MongoDB Atlas Provider
#
terraform {
  required_providers {
    mongodbatlas = {
      source  = "mongodb/mongodbatlas"
      version = "1.34.0"
    }
  }
}
provider "mongodbatlas" {
  public_key  = var.public_key
  private_key = var.private_key
}

#
# Create a Dedicated Tier Cluster
#
resource "mongodbatlas_advanced_cluster" "pov-terraform" {
  project_id     = var.atlasprojectid
  name           = "POV"
  backup_enabled = false
  cluster_type   = "REPLICASET"
  replication_specs {
    region_configs {
      electable_specs {
        instance_size = var.atlas_provider_instance_size_name
      }
      provider_name         = "TENANT"
      backing_provider_name = var.atlas_provider_name
      priority              = 7
      region_name           = var.cluster_region
    }
  }
}

#
# Create an Atlas Admin Database User
#
resource "mongodbatlas_database_user" "my_user" {
  username           = var.mongodb_atlas_database_username
  password           = var.mongodb_atlas_database_user_password
  project_id         = var.atlasprojectid
  auth_database_name = "admin"

  roles {
    role_name     = "atlasAdmin"
    database_name = "admin"
  }
}

# Use terraform output to display connection strings.
output "connection_strings" {
  value = ["${mongodbatlas_advanced_cluster.pov-terraform.connection_strings}"]
}
