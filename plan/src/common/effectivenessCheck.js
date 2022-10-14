// 아이디 정규식 :  소문자 + 숫자 + 언더바/ 하이푼 허용 4~10자리
export const idCheck = (useId) => {
  let idreg = /^[a-z0-9_-]{4,10}$/;

  return idreg.test(useId);
};
// 비밀번호 정규식 : 문자와 특수문자 조합의 6~14자리
export const pwdCheck = (pwd) => {
  let pwdreg = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,14}/;

  return pwdreg.test(pwd);
};
