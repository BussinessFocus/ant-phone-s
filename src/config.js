/**
 * Created by Medicon on 2019/11/22.
 */
const conf={};

//运行环境为开发环境配置
conf.baseUrl = "开发环境baseurl";

//运行环境为测试环境配置
if(process.env.NODE_ENV==='production' && process.env.REACT_APP_RUN_ENV){
    conf.baseUrl = "测试环境baseurl";
}

//运行环境为生产环境配置
if(process.env.NODE_ENV==='production' && process.env.REACT_APP_RUN_ENV === undefined){
    conf.baseUrl = "生产环境baseurl"
}

//输出运行环境标识
if(process.env.REACT_APP_RUN_ENV){
    console.log("test");
}else {
    console.log(process.env.NODE_ENV);
}

export default conf;