from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline

app = Flask(__name__)
CORS(app)

# Load the BART summarization model
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

@app.route("/summarize", methods=["POST"])
def summarize():
    data = request.json
    email_body = data.get("email_body", "")
    input_length = len(email_body.split())
    max_size = min(130, int(input_length * 0.8)) 
    summary = summarizer(email_body, max_length=max_size, min_length=30, do_sample=False)
    return jsonify({"summary": summary[0]["summary_text"]})

if __name__ == "__main__":
    print("Starting Flask server...")
    app.run(debug=True)

