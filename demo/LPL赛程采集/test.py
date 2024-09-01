def string_to_byte_array(input_string: str, encoding: str = 'utf-8') -> bytes:
    """
    将字符串转换为字节数组

    参数:
    input_string (str): 要转换的字符串
    encoding (str): 字符编码, 默认为 'utf-8'

    返回:
    bytes: 字节数组
    """
    try:
        byte_array = input_string.encode(encoding)
        return byte_array
    except UnicodeEncodeError as e:
        print(f"编码错误: {e}")
        return b''

# 示例使用
input_str = "Hello, 世界"
byte_array = string_to_byte_array(input_str)
print(byte_array)
