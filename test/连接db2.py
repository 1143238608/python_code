import ibm_db_dbi

# 设置数据库连接参数
dsn_hostname = "HOSTNAME"  # 主机名或 IP 地址
dsn_database = "DATABASE"  # 数据库名称
dsn_port = "PORT"          # 端口号
dsn_protocol = "PROTOCOL"  # 协议
dsn_uid = "USERNAME"       # 用户名
dsn_pwd = "PASSWORD"       # 密码
dsn_security = "SECURITY"  # 安全选项

# 构建 DSN 字符串
dsn = (
    "DATABASE={0};"
    "HOSTNAME={1};"
    "PORT={2};"
    "PROTOCOL={3};"
    "UID={4};"
    "PWD={5};"
    "SECURITY={6};"
).format(dsn_database, dsn_hostname, dsn_port, dsn_protocol, dsn_uid, dsn_pwd, dsn_security)

# 建立连接
conn = ibm_db_dbi.connect(dsn)

# 关闭连接
conn.close()

