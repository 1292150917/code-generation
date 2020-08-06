define({ "api": [
  {
    "type": "post",
    "url": "/kecheng/add",
    "title": "个人中心1新增",
    "description": "<p>&quot;&quot;</p>",
    "name": "Addkecheng",
    "group": "个人中心1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/kecheng/add"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/kecheng.js",
    "groupTitle": "个人中心1"
  },
  {
    "type": "post",
    "url": "/kecheng/queryList",
    "title": "个人中心1列表",
    "description": "<p>&quot;&quot;</p>",
    "name": "GetListkecheng",
    "group": "个人中心1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/kecheng/queryList"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/kecheng.js",
    "groupTitle": "个人中心1"
  },
  {
    "type": "post",
    "url": "/kecheng/query",
    "title": "个人中心1详情",
    "description": "<p>&quot;&quot;</p>",
    "name": "PostListkecheng",
    "group": "个人中心1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "page",
            "description": "<p>分页，如果不需要可不发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>分页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/kecheng/query"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/kecheng.js",
    "groupTitle": "个人中心1"
  },
  {
    "type": "post",
    "url": "/kecheng/update",
    "title": "个人中心1修改",
    "description": "<p>&quot;&quot;</p>",
    "name": "Postkecheng",
    "group": "个人中心1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/kecheng/update"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/kecheng.js",
    "groupTitle": "个人中心1"
  },
  {
    "type": "post",
    "url": "/kecheng/delete",
    "title": "个人中心1删除",
    "description": "<p>&quot;&quot;</p>",
    "name": "deletekecheng",
    "group": "个人中心1",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>主键 新增误发</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "course",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pay",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "/kecheng/delete"
      }
    ],
    "version": "0.0.0",
    "filename": "DaveFile/database/documents/kecheng.js",
    "groupTitle": "个人中心1"
  }
] });
