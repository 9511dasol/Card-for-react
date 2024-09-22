# Card Recommendation Homepage by react
카드 추천 홈페이지

[demo](https://9511dasol.github.io/Card-for-react/)
## 프로젝트 소개 🖥️
리액트, 리덕스를 활용하여 만든 카드 추천 홈페이지 입니다.

## 개발 기간 ⏱️
24.08.05 - ing

### 맴버 구성 🧑‍🤝‍🧑
- 한다솔: 프론트앤드

### 개발 환경 ⚙️
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## 주요 기능 📌
- 텐서플로우를 이용한 자연어 처리 모델 개발 - 특정 커뮤니티에 올라오는 게시글 댓글 학습
- 최근(하루)에 많이 언급된 카드 순으로 나열해주는 알고리즘 구현
- 특정 카드 url을 넣으면 카드 이름, 혜택, 연회비 등 정보를 자동으로 가져오는 크롤링&알고리즘 구현
- 포인트 / 할인 카드 검색 기능 구현

# 주요 코드
### Python
    from tensorflow.keras.layers import Embedding, Dense, LSTM, GRU
    from tensorflow.keras.models import Sequential
    from tensorflow.keras.callbacks import EarlyStopping
    embedding_size = 248# 일반적으로 100에서 300
    es = EarlyStopping(monitor='val_loss', mode='min', verbose=1, patience=4, restore_best_weights=True)
    model = Sequential()
    # 임베딩층 추가
    model.add(Embedding(input_dim=num_words,      # 사용하는 단어의 개수
                        output_dim=embedding_size,# 임베딩 차원
                        input_length=max_tokens,  # 리뷰의 길이
                        name='layer_embedding'))
    model.add(LSTM(units=256)) # GRU나 LSTM 사용 (여기에서는 LSTM이 좀 더 좋은 성능을 보이는 것 같음)
    model.add(Dense(1, activation='sigmoid'))
    model.compile(optimizer='rmsprop', loss='binary_crossentropy', metrics=['acc'])
    model.fit(X_train, y_train, epochs=10000, callbacks=es, batch_size=64, validation_split=0.2)
    def sentiment_predict(new_sentence):
      new_sentence = re.sub(r'[^ㄱ-ㅎㅏ-ㅣ가-힣 ]','', new_sentence) # 한글과 공백만 남기기
      new_sentence = okt.morphs(new_sentence, stem=True) # 형태소 분석
      new_sentence = [word for word in new_sentence if not word in stopwords] # 불용어 제거
      encoded = tokenizer.texts_to_sequences([new_sentence]) # 토큰화
      pad_new = pad_sequences(encoded, maxlen = max_tokens) # 패딩
      score = float(model.predict(pad_new)) # 예측
      if(score > 0.5):
        print("{:.2f}% 확률로 긍정 글입니다.\n".format(score * 100))
      else:
        print("{:.2f}% 확률로 부정 글입니다.\n".format((1 - score) * 100))
    sentiment_predict('레이디 클레식 카드 좋다~~') # 95.01% 확률로 긍정 글입니다.
    sentiment_predict('더모아 사기네 ?') # 95.01% 확률로 긍정 글입니다.
### jQuery
    let innate_number = $(button).parents('#id or .class'). - 부모의 값 가져요기
    let innate_number = $(button).siblings('.IN').text(); # 자기 형제
    let innate_number = $(button).attr('value') # 속성 값 # 자기 자신 속성값
    let innate_number = $(button).text() # 자시 자신 text
    
