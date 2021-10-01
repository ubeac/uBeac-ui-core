// https://www.npmjs.com/package/@jappyjan/swagger-axios-codegen

const { codegen } = require('swagger-axios-codegen')

codegen({
  methodNameMode: 'path',
  multipleFileMode: false,
  enumNamePrefix: 'Enum',
  useStaticMethod: true,  
  serviceNameSuffix: 'Service',
  fileName: 'vacation.ts',
  remoteUrl: 'http://localhost:2893/swagger/v1/swagger.json',
  outputDir: './src/services/api'
})