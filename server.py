import http.server
import socketserver

PORT = 8000
# O endereço IP 127.0.0.1 é o "localhost", o endereço padrão para o próprio computador.
# Usá-lo aqui não muda como o servidor funciona, apenas o texto que aparece no terminal.
ADDRESS = "127.0.0.1" 

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor 'Descarte Inteligente' iniciado.")
    print(f"Acesse em seu navegador: http://{ADDRESS}:{PORT}")
    httpd.serve_forever()