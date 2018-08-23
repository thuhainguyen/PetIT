const checkInput = (
  phoneText: string,
  passwordText: string,
  comfirmText: string,
): { result: boolean, message: string } => {
  let message = '';
  if (phoneText) {
    if (phoneText.length < 9) {
      message = 'Số điện thoại không hợp lệ';
      return { result: false, message };
    }
    if (!passwordText || !comfirmText) {
      message = 'Tài khoản của bạn cần có mật khẩu';
      return { result: false, message };
    }
    if (passwordText.length < 6) {
      message = 'Mật khẩu cần có tối thiểu 6 kí tự';
      return { result: false, message };
    }
    if (passwordText !== comfirmText) {
      message = 'Xác nhận mật khẩu không khớp';
      return { result: false, message };
    }
    return { result: true, message };
  }
  message = 'Bạn cần phải nhập số điện thoại';
  return { result: false, message };
};

const checkCode = (code) => {
  let message = '';
  switch (code) {
    case 'auth/email-already-in-use':
      message = 'Số điện thoại đã được đăng ký';
      break;
    case 'auth/invalid-email':
      message = 'Số điện thoại không hợp lệ';
      break;
    case 'auth/user-disabled':
      message = 'Tài khoản đã bị khóa';
      break;
    case 'auth/user-not-found':
      message = 'Số điện thoại không tồn tại';
      break;
    case 'auth/wrong-password':
      message = 'Mật khẩu không đúng';
      break;
    case 'auth/weak-password':
      message = 'Mật khẩu yếu';
      break;
    default:
      message = code;
      break;
  }
  return message;
};
export { checkInput, checkCode };
