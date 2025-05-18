# Perf Advisor on search query

## Prepare Search Index

### search_index_keyword
```
{
  "mappings": {
    "dynamic": false,
    "fields": {
      "address": {
        "type": "document",
        "dynamic": false,
        "fields": {
          "street": [
            {
              "type": "string",
              "analyzer": "lucene.keyword",
              "searchAnalyzer": "lucene.keyword"
            }
          ]
        }
      },
      "firstname": {
        "type": "string",
        "analyzer": "lucene.keyword",
        "searchAnalyzer": "lucene.keyword"
      }
    }
  }
}
```

### search_index_standard
```
{
  "mappings": {
    "dynamic": false,
    "fields": {
      "address": {
        "type": "document",
        "dynamic": false,
        "fields": {
          "street": [
            {
              "type": "string",
              "analyzer": "lucene.standard",
              "searchAnalyzer": "lucene.standard"
            }
          ]
        }
      },
      "firstname": {
        "type": "string",
        "analyzer": "lucene.standard",
        "searchAnalyzer": "lucene.standard"
      }
    }
  }
}
```

## Run 01_search_query.bat

Check the Performance Advisor, see if the index recommendation appears