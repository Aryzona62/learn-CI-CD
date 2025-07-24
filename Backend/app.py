from flask import Flask, jsonify
from flask_cors import CORS # Impor Flask-CORS untuk mengizinkan permintaan dari frontend

app = Flask(__name__)
CORS(app) # Aktifkan CORS untuk semua rute

@app.route('/api/message')
def get_message():
    return jsonify(message='Halo dari Backend Docker! (V1)')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)