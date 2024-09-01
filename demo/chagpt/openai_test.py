from openai import OpenAI

client = OpenAI(
    organization='org-VGXGMAwJEzh2gDRwcOJTcxgw',
    api_key='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',
    timeout=60
)
client._proxies = {
    'http': 'http://localhost:7890',
    'https': 'https://localhost:7890'
}
completion = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ]
)

print(completion.choices[0].message)


#######################################################################################
# import openai
#
# openai.api_key = "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"


# def askGPT(prompt):
#     model_engine = "text-davinci-003"
#
#     completions = openai.Completion.create(
#         engine=model_engine,
#         prompt=prompt,
#         max_tokens=1024,
#         n=1,
#         stop=None,
#         temperature=0.5,
#     )
#
#     answer = completions.choices[0].text
#     print(answer)
#
#
# askGPT("世界人口有多少")



