import { Mock } from "mockjs";
function createUserList() {
  return [
    {
      username: 'admin', 
      password: '123456', 
      token: 'mock_token_001',
      desc:'平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
    },
    {
      username: 'user', 
      password: '654321', 
      token: 'mock_token_002',
      desc:'系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
    }
  ]
}
export default [
  {
    url: '/api/user/login',
    method: 'post',
    response: (request) => {
      // 获取请求体中的账号密码
      const { username, password } = request.body;
      // 校验账号密码
      const targetUser = createUserList().find(item => 
        item.username === username && item.password === password
      );
      // 无匹配用户返回失败
      if (!targetUser) {
        return { code: 401, data: { message: '账号或密码错误' } };
      }
      // 验证通过返回token
      return { 
        code: 200, 
        data: { 
          token: targetUser.token, 
          message: '登录成功' 
        } 
      };
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
        // 获取请求头携带token
        const token = request.headers.token;
        // 查看用户信息是否包含有次token用户
        const checkUser = createUserList().find((item) => item.token === token);
        // 没有返回失败的信息
        if (!checkUser) {
            return { code: 201, data: { message: '获取用户信息失败' } };
        }
        // 如果有返回成功信息
        return { code: 200, data: { checkUser } };
    },
  }
]