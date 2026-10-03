"use client";

import { useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  Heart,
  User,
  Gamepad2,
  Zap,
  ShieldCheck,
  ChevronRight,
  Star,
  Menu,
  X,
  Headphones,
} from "lucide-react";

const products = [
  ["EA SPORTS FC 26", "PlayStation 5", "89.90", "109.90", "-18%", "FC"],
  ["Grand Theft Auto V", "PC • Rockstar", "34.90", "49.90", "-30%", "V"],
  ["Minecraft", "PC • Microsoft", "39.90", "", "TOP", "MC"],
  ["PlayStation Plus Essential", "12 ay", "119.90", "139.90", "-14%", "PS+"],
  ["Steam Gift Card", "50 TRY", "5.90", "", "ANI", "STEAM"],
  ["Valorant Points", "1850 VP", "34.90", "", "POP", "VP"],
  ["Xbox Game Pass Ultimate", "3 ay", "44.90", "59.90", "-25%", "XBOX"],
  ["PUBG Mobile UC", "660 UC", "21.90", "", "SÜRƏTLİ", "UC"],
];

const categories = [
  ["PlayStation", "PS4 & PS5", "P"],
  ["Steam", "PC oyunları", "S"],
  ["Xbox", "Game Pass", "X"],
  ["E-pin", "Oyun valyutası", "EP"],
  ["Hədiyyə kartları", "Balans kodları", "G"],
  ["Abunəliklər", "Premium xidmətlər", "+"],
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState(0);
  const [menu, setMenu] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      `${product[0]} ${product[1]}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <>
      <div className="ticker">
        ⚡ Həftənin fürsətləri başladı
        <b>•</b>
        Rəqəmsal məhsullarda sürətli çatdırılma
        <b>•</b>
        Təhlükəsiz alış-veriş
      </div>

      <header>
        <div className="top">
          <button className="mobile-menu" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>

          <a className="logo">
            <span>N</span>
            NEXTPLAY
          </a>

          <div className="search">
            <Search />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Oyun, gift card, e-pin axtar..."
            />
          </div>

          <div className="actions">
            <button>
              <Heart />
              <small>Seçilmişlər</small>
            </button>

            <button>
              <User />
              <small>Hesabım</small>
            </button>

            <button className="cart-button">
              <ShoppingCart />
              <i>{cart}</i>
              <small>Səbət</small>
            </button>
          </div>
        </div>

        <nav className={menu ? "open" : ""}>
          <a>Oyunlar</a>
          <a>PlayStation</a>
          <a>Xbox</a>
          <a>Steam</a>
          <a>E-pin</a>
          <a>Hədiyyə kartları</a>
          <a>Abunəliklər</a>
          <a className="sale">Kampaniyalar</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div>
            <span className="eyebrow">NEXTDROP • MƏHDUD TƏKLİF</span>

            <h1>
              Oyun dünyası.
              <br />
              <em>Bir klik uzaqda.</em>
            </h1>

            <p>
              Sevdiyin oyunlar, gift card-lar və e-pinlər — sürətli,
              rahat və təhlükəsiz şəkildə.
            </p>

            <div className="hero-buttons">
              <button>
                İndi kəşf et
                <ChevronRight />
              </button>

              <button className="ghost">
                Kampaniyalara bax
              </button>
            </div>

            <div className="trust">
              <span>
                <Zap />
                Sürətli çatdırılma
              </span>

              <span>
                <ShieldCheck />
                Təhlükəsiz ödəniş
              </span>

              <span>
                <Headphones />
                Dəstək mərkəzi
              </span>
            </div>
          </div>

          <div className="gaming-orb">
            <Gamepad2 />

            <strong>
              NEXT<span>PLAY</span>
            </strong>

            <small>DIGITAL GAMING MARKETPLACE</small>
          </div>
        </section>

        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">PLATFORMANI SEÇ</span>
              <h2>Nə axtarırsan?</h2>
            </div>

            <a>
              Hamısına bax
              <ChevronRight />
            </a>
          </div>

          <div className="categories">
            {categories.map((category) => (
              <button key={category[0]}>
                <b>{category[2]}</b>

                <span>
                  <strong>{category[0]}</strong>
                  <small>{category[1]}</small>
                </span>

                <ChevronRight />
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="section-head">
            <div>
              <span className="eyebrow">POPULYAR</span>
              <h2>Ən çox seçilənlər</h2>
            </div>

            <div className="tabs">
              <button>Hamısı</button>
              <button>Oyunlar</button>
              <button>E-pin</button>
            </div>
          </div>

          {query && (
            <p className="search-result">
              “{query}” üçün {filteredProducts.length} nəticə
            </p>
          )}

          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <article className="product-card" key={product[0]}>
                <div className={`product-cover cover-${index}`}>
                  <span>{product[5]}</span>

                  <label>{product[4]}</label>

                  <button className="favorite">
                    <Heart />
                  </button>
                </div>

                <div className="product-info">
                  <small>{product[1]}</small>

                  <h3>{product[0]}</h3>

                  <div className="rating">
                    <Star fill="currentColor" />
                    4.9
                    <span>• Rəqəmsal</span>
                  </div>

                  <div className="price">
                    <div>
                      <strong>{product[2]} ₼</strong>

                      {product[3] && (
                        <del>{product[3]} ₼</del>
                      )}
                    </div>

                    <button onClick={() => setCart(cart + 1)}>
                      <ShoppingCart />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="game-finder">
          <div>
            <span className="eyebrow">
              QƏRAR VERƏ BİLMİRSƏN?
            </span>

            <h2>Sənə uyğun oyunu tapaq.</h2>

            <p>
              Platformanı və zövqünü seç, sənə uyğun məhsulları
              göstərək.
            </p>
          </div>

          <button>
            Oyunu tap
            <Gamepad2 />
          </button>
        </section>
      </main>

      <footer>
        <div className="footer-brand">
          <a className="logo">
            <span>N</span>
            NEXTPLAY
          </a>

          <p>
            Azərbaycan üçün yeni nəsil rəqəmsal oyun mağazası.
          </p>
        </div>

        <div>
          <b>Mağaza</b>
          <a>Oyunlar</a>
          <a>E-pin</a>
          <a>Gift Card</a>
        </div>

        <div>
          <b>Dəstək</b>
          <a>Yardım mərkəzi</a>
          <a>Necə alım?</a>
          <a>Əlaqə</a>
        </div>

        <div>
          <b>Hüquqi</b>
          <a>İstifadə şərtləri</a>
          <a>Məxfilik</a>
          <a>Qaytarma şərtləri</a>
        </div>
      </footer>

      <div className="mobile-nav">
        <button>
          <Gamepad2 />
          <small>Mağaza</small>
        </button>

        <button>
          <Search />
          <small>Axtar</small>
        </button>

        <button>
          <Heart />
          <small>Seçilmişlər</small>
        </button>

        <button>
          <ShoppingCart />
          <small>Səbət</small>
        </button>
      </div>
    </>
  );
}
