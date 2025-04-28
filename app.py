from flask import Flask, request, render_template, make_response

app = Flask(__name__)

@app.route('/')
def home():
    return '''
    <h1>ZeroAgent 🚀</h1>
    <p>ZeroAgent is a platform that connects to your Shopify or Wix store and adds an AI agent to your store website as a chat widget.</p>
    <p>The agents interact with customers, offer product suggestions, answer queries and provide assistance — just like a real salesperson!</p>
    <hr>
    <h2>Create your Agent:</h2>
    <form action="/create_agent" method="post">
        <input type="text" name="store_url" placeholder="Enter your Wix/Shopify store URL" required style="width:400px;padding:10px;">
        <br><br>
        <button type="submit" style="padding:10px 20px;">Create Agent</button>
    </form>
    '''

@app.route('/create_agent', methods=['POST'])
def create_agent():
    store_url = request.form['store_url']
    embed_code = f'''
    <h2>Agent created for {store_url}!</h2>
    <p>Now embed this script into your Wix/Shopify website:</p>
    <textarea rows="5" cols="80" readonly>
<script src="https://your-render-url.onrender.com/agent.js?store={store_url}"></script>
    </textarea>
    <br><br>
    <a href="/">Create another</a>
    '''
    return embed_code

@app.route('/agent.js')
def serve_agent_js():
    store_url = request.args.get('store', '')
    response = make_response(render_template('agent_template.js', store=store_url))
    response.headers['Content-Type'] = 'application/javascript'
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
