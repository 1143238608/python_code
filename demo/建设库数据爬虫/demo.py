import requests, execjs, time, pymysql, json
from pyecharts.charts import Bar
from pyecharts import options as opts
from flask import Flask,render_template

url = 'https://capi.jiansheku.com/nationzj/project/siku'


def get_data(page):
    js = execjs.compile(open('./1.js', encoding='utf-8').read())

    param = {
        "enterpriseAchievementQueryDto": [],
        "achievementQueryType": "and",
        "page": {
            "page": page,
            "limit": '20',
            "field": "",
            "order": "desc"
        }
    }
    t = str(int(time.time() * 1000))
    sign = js.call('get_sign', param, t)

    headers = {

        "Sign": sign,
        "Timestamp": t,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36"
    }
    response = requests.post(url=url, headers=headers, json=param).text
    # print(response)
    return json.loads(response)


def save_data(dta):
    # 连接数据库
    connection = pymysql.connect(
        host="8.134.103.4",  # 数据库主机地址
        user="root",  # 数据库用户名
        password="112233",  # 数据库密码
        database="db_test",  # 数据库名称
        port=3307
    )

    # 创建游标对象
    cursor = connection.cursor()

    # 定义插入数据的 SQL 语句
    insert_query = "INSERT INTO project_db (projectName,purpose,division,buildCorpName,invest,nature,approvalLevel) VALUES (%s, %s, %s, %s, %s, %s, %s)"

    # 插入数据的值
    data_to_insert = (
        dta['projectName'], dta['purpose'], dta['division'], dta['buildCorpName'], dta['invest'], dta['nature'],
        dta['approvalLevel'])
    try:
        # 执行 SQL 语句
        cursor.execute(insert_query, data_to_insert)
        # 提交到数据库
        connection.commit()
        print("数据插入成功!")
    except Exception as e:
        # 发生错误时回滚
        connection.rollback()
        print(f"发生错误: {e}")
    finally:
        # 关闭游标和连接
        cursor.close()
        connection.close()


def select_data():
    # 连接数据库
    connection = pymysql.connect(
        host="8.134.103.4",  # 数据库主机地址
        user="root",  # 数据库用户名
        password="112233",  # 数据库密码
        database="db_test",  # 数据库名称
        port=3307
    )

    # 创建游标对象
    cursor = connection.cursor()

    # 执行SQL查询
    cursor.execute("SELECT * FROM project_db")

    # 获取查询结果
    results = cursor.fetchall()
    list_0 = []
    list_1000 = []
    list_2000 = []
    list_3000 = []
    list_4000 = []
    list_5000 = []
    len_sum = []
    # 处理结果
    for row in results:
        if row[5] >= 0 and row[5] <= 1000:
            list_0.append(row[5])
        elif row[5] > 1000 and row[5] <= 2000:
            list_1000.append(row[5])
        elif row[5] > 2000 and row[5] <= 3000:
            list_2000.append(row[5])
        elif row[5] > 3000 and row[5] <= 4000:
            list_3000.append(row[5])
        elif row[5] > 4000 and row[5] <= 5000:
            list_4000.append(row[5])
        else:
            list_5000.append(row[5])
        print(row)
    len_sum.append(len(list_0))
    len_sum.append(len(list_1000))
    len_sum.append(len(list_2000))
    len_sum.append(len(list_3000))
    len_sum.append(len(list_4000))
    len_sum.append(len(list_5000))
    show_data(len_sum)
    # 关闭游标和连接
    cursor.close()
    connection.close()


def show_data(len_sum):
    bar = (
        Bar()
        .add_xaxis(["0-1000", "1000-2000", "2000-3000", "3000-4000", "4000-5000", "5000-6000"])
        .add_yaxis("商家A", len_sum)
        .set_global_opts(tooltip_opts=opts.TooltipOpts(trigger="axis", axis_pointer_type="cross"))
    )
    bar.set_colors(["#4cabce"])
    bar.render()


app = Flask(__name__)


@app.route("/")
def get_d():
    return render_template('render.html')


if __name__ == '__main__':
    # for i in range(11, 101):
    #     dta = get_data(str(i))
    #     for d in dta['data']['list']:
    #         save_data(d)
    select_data()
    app.run(debug=True)