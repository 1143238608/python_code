def demo():
    click_point = "43,276|137,44|140,276"
    click_point_array = click_point.split('|')
    click_point_true = []
    for item in click_point_array:
        x, y = item.split(',')
        point = str(int(int(x) / 344 * 10000)) + '_' + str(int(int(y) / 344 * 10000))
        click_point_true.append(point)
    click_point_str = ','.join(click_point_true)
    print(click_point_str)


if __name__ == '__main__':
    demo()
