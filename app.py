from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Simple sentiment analysis based on predefined words
def analyze_sentiment(statement):
    positive_words = ['good', 'great', 'awesome', 'happy', 'positive']
    negative_words = ['bad', 'terrible', 'awful', 'sad', 'negative']

    score = 0

    for word in statement.lower().split():
        if word in positive_words:
            score += 1
        elif word in negative_words:
            score -= 1

    if score > 0:
        return {"label": "Positive", "score": score}
    elif score < 0:
        return {"label": "Negative", "score": score}
    else:
        return {"label": "Neutral", "score": score}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    statement = data['statement']
    sentiment_result = analyze_sentiment(statement)

    return jsonify(sentiment_result)

if __name__ == '__main__':
    app.run(debug=True)
