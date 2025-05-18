# RESOURCE POLICY

__Ability to set resource policy at Atlas organization level__

__SA Maintainer__: [Fernando Karnagi](mailto:fernando.karnagi@mongodb.com) <br/>
__Time to setup__: 30 mins <br/>
__Time to execute__: 15 mins <br/>


---

## Description
 
This workshop shows how Atlas resource policy is able to achieve the following:
- Limit cluster deployment to specific cloud platforms (AWS, Google Cloud, Azure).
- Restrict cluster deployment to designated regions within a cloud provider. For example,
- Prevent users from provisioning, updating, or auto-scaling clusters to a tier above or below a specified threshold.

---

## Setup

__1. Configure Atlas Environment__
* Register new Atlas account through this [registration page](https://www.mongodb.com/cloud/atlas/register)
* Organization and project will be automatically created

## Create Atlas Policy

### ONLY_ALLOW_AWS
```
forbid (principal, 
   action == ResourcePolicy::Action::"cluster.modify", 
   resource) 
when { 
  !(context.cluster.cloudProviders.contains(ResourcePolicy::CloudProvider::"aws"))
};
```

### ONLY_ALLOW_SG
```
forbid (principal, 
   action == ResourcePolicy::Action::"cluster.modify", 
   resource) 
when { 
  !(context.cluster.regions.contains(ResourcePolicy::Region::"aws:ap-southeast-1"))
};
```

### ONLY_ALLOW_AWS_SG

