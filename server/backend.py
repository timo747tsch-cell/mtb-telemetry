from flask import Flask, request, jsonify
import numpy as np
from scipy.signal import correlate

app = Flask(__name__)

@app.route('/calibrate', methods=['POST'])
def calibrate():
    data = request.json
    raw = np.array(data.get('raw', []))
    target_mm = np.array(data.get('target_mm', []))
    if len(raw) < 2:
        return jsonify({'error':'need at least 2 reference points'}), 400
    coeffs = np.polyfit(raw, target_mm, 1)
    return jsonify({'coeffs': coeffs.tolist()})

@app.route('/sync', methods=['POST'])
def sync():
    a = np.array(request.json.get('a', []))
    b = np.array(request.json.get('b', []))
    if len(a) == 0 or len(b) == 0:
        return jsonify({'error':'empty signals'}), 400
    a = a - a.mean(); b = b - b.mean()
    c = correlate(a, b, mode='full')
    lag = int(c.argmax() - (len(b)-1))
    return jsonify({'lag': lag})

if __name__ == '__main__':
    app.run(port=5001)
