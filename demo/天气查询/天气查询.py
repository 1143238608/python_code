import requests, re
import pyecharts.options as opts
from pyecharts.charts import Bar, Line
from pyecharts.globals import ThemeType

url = 'https://lishi.tianqi.com/wutai/202303.html'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
}
response = requests.get(url=url, headers=headers).text

hightemp, = re.findall('var hightemp = (.*?);', response)
lowtemp, = re.findall('var lowtemp = (.*?);', response)
timeaxis, = re.findall('var timeaxis = (.*?);', response)
print(hightemp, lowtemp, timeaxis)
print([x + '日' for x in timeaxis.strip('[').strip(']').split(',')])

bar = (Bar({"theme": ThemeType.MACARONS})
       .add_xaxis(xaxis_data=[x + '日' for x in timeaxis.strip('[').strip(']').split(',')])
       .add_yaxis(series_name='最低温', y_axis=lowtemp.strip('[').strip(']').split(','),
                  label_opts=opts.LabelOpts(is_show=False))
       .add_yaxis(series_name='最高温', y_axis=hightemp.strip('[').strip(']').split(','),
                  label_opts=opts.LabelOpts(is_show=False))
       .set_global_opts(xaxis_opts=opts.AxisOpts(boundary_gap=True, is_show=True,
                                                 axisline_opts=opts.AxisLineOpts(
                                                     linestyle_opts=opts.LineStyleOpts(width=10))),
                        brush_opts=opts.BrushOpts(),
                        datazoom_opts=opts.DataZoomOpts(),)
       )
bar.render('温度情况图.html')
# print(response)
