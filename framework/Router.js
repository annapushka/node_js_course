module.exports =
    class Router {
        constructor() {
            this.enpoints = {};
        }

        request(method = 'GET', path, handler) {
            if (!this.enpoints[path]) {
                this.enpoints[path] = {};
            }
            const endpoint = this.enpoints[path];
            if (endpoint[method]) {
                throw new Error(`[${method}] for ${path} already exists`);
            }
            endpoint[method] = handler;
            // emmiter.on(`[${path}]:[${method}]`, (req, res) => {
            //     if (req.method === method && req.url === path) {
            //         handler(req, res);
            //     }
            // });
        }

        get(path, handler) {
            this.request('GET', path, handler);
        }

        post(path, handler) {
            this.request('POST', path, handler);
        }

        put(path, handler) {
            this.request('PUT', path, handler);
        }

        delete(path, handler) {
            this.request('DELETE', path, handler);
        }
    }