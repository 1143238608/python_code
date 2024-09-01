import threading


class MovieTicket:
    def __init__(self, total_tickets):
        self.total_tickets = total_tickets
        self.lock = threading.Lock()

    def buy_ticket(self, num_tickets):
        with self.lock:
            if self.total_tickets >= num_tickets:
                print(f"购买成功 {num_tickets} 张票")
                self.total_tickets -= num_tickets
            else:
                print('票已卖完！')
def buy_tickets(movieTicket, tickets):
    movieTicket.buy_ticket(tickets)

# 创建电影票对象
movieTicket = MovieTicket(total_tickets=100)

# 创建多个线程模拟购票
threads = []
for i in range(5):
    thread = threading.Thread(target=buy_tickets, args=(movieTicket, 2))
    threads.append(thread)
# 启动线程
for thread in threads:
    thread.start()
# 等待所有线程结束
for thread in threads:
    thread.join()
