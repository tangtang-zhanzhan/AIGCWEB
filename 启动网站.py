from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse
import argparse


class SiteHandler(SimpleHTTPRequestHandler):
    def send_head(self):
        path = urlparse(self.path).path
        candidate = Path(self.translate_path(path))
        if not candidate.exists() and not Path(path).suffix:
            self.path = "/index.html"
        return super().send_head()


def main():
    parser = argparse.ArgumentParser(description="唐婧个人网站本地预览服务")
    parser.add_argument("--port", type=int, default=4173)
    args = parser.parse_args()
    root = Path(__file__).resolve().parent
    handler = partial(SiteHandler, directory=str(root))
    server = ThreadingHTTPServer(("127.0.0.1", args.port), handler)
    print(f"网站已启动：http://localhost:{args.port}/")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
