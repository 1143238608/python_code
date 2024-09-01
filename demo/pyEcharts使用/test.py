from pyecharts import options as opts
from pyecharts.charts import Bar

# 示例数据
categories = ["A", "B", "C", "D", "E"]
values = [30, 50, 80, 120, 150]

# 创建柱状图
bar_chart = (
    Bar()
    .add_xaxis(categories)
    .add_yaxis("Series", values)
    .set_global_opts(
        title_opts=opts.TitleOpts(title="Bar Chart"),

    )
)

# 渲染图表并保存为 HTML 文件
bar_chart.render("test.html")
