extern crate iron;
extern crate mount;
extern crate router;
extern crate staticfile;

use std::path::Path;
use iron::{
    Url,
    status,
    Iron,
    Request,
    Response,
    IronResult,
    AfterMiddleware,
    Chain
};
use iron::error::{IronError};
use iron::modifiers::Redirect;
use mount::Mount;
use router::{Router, NoRoute};
use staticfile::Static;

struct NotFound;

/// # NotFoundページ設定
///
impl AfterMiddleware for NotFound {
    fn catch(&self, req: &mut Request, err: IronError) -> IronResult<Response> {
        // リクエストからサーバのホスト名を取得
        let server_host_name = req.url.host();
        let url = Url::parse(&format!("{}{}{}", "http://", server_host_name, "/notfound/")).unwrap();
        if let Some(_) = err.error.downcast::<NoRoute>() {
            // ルーティングの設定がされていないURLの時
            Ok(Response::with((status::Found, Redirect(url.clone()))))
        } else {
            // 例外時もNotFoundページを表示するように対応
            Ok(Response::with((status::Found, Redirect(url.clone()))))
        }
    }
}

/// # ルーティングのハンドラ
///
fn handler(_: &mut Request) -> IronResult<Response> {
    Ok(Response::with((status::Ok, "Handling response")))
}

/// # main
///
fn main() {
    // ルーティングの設定
    let mut router = Router::new();
    router.get("/*", handler, "index");

    let mut mount = Mount::new();
    // Topページの読み込み
    mount.mount("/", Static::new(Path::new("../cocos2d/Top/build/web-mobile")));
    // 存在しないページの読み込み
    mount.mount("/notfound/", Static::new(Path::new("../cocos2d/NotFound/build/web-mobile")));
    mount.mount("/*", router);

    let mut chain = Chain::new(mount);
    // ページが存在しないとき
    chain.link_after(NotFound);

    // サーバ起動
    Iron::new(chain).http("0.0.0.0:3000").unwrap();
}
