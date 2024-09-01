import jwt
import websocket

try:
    import thread
except ImportError:
    import _thread as thread
import json
import time


def get_sign(room_id, app_id, secret):
    payload = {
        "iat": int(time.time()),
        "exp": int(time.time()) + 600,
        "roomId": room_id,
        "appId": app_id
    }
    token = jwt.encode(payload, secret, algorithm='HS256')

    return token


def on_message(ws, message):
    info = json.loads(message)
    print(info)


def on_error(ws, error):
    # pass
    print(error)


def on_close(ws):
    print("### closed ###")


def on_open(ws):
    def run(*args):
        ws.send(
            '{"command":"subscribeNotice","data":["getMessageNotice","getVipEnterBannerNotice","getSendItemNotice","getOnTVAwardNotice", "getOpenNobleNotice", "getOpenGuardianNotice", "getUserMutedNotice"],"reqId":"123456789"}')
        while True:
            ws.send("ping")
            time.sleep(10)

    thread.start_new_thread(run, ())


if __name__ == "__main__":
    room_id = 52009
    app_id = '8bd6a4f796573ef4'
    secret = '1394a837297afd805ad7cea9f938d549'
    sign = get_sign(room_id, app_id, secret)
    print(sign)
    # print(sign.decode())
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp(
        "ws://ws-apiext.huya.com/index.html?do=comm&roomId=" + str(room_id) + "&appId=" + app_id + "&iat=" + str(
            int(time.time())) + "&sToken=" + sign,
        on_message=on_message,
        on_error=on_error,
        on_close=on_close)
    ws.on_open = on_open
    ws.run_forever()
