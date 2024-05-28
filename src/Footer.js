
export default function Footer() {
  return (
  <footer className="footer items-center p-3 text-neutral-content" style={{ zIndex: `99999`, position: 'fixed', bottom: 0, background: "rgba(203, 166, 247, 0.3)" }}>
  <aside className="items-center grid-flow-col">
   <img src="data:image/png;base64,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" />
  <p>Copyright © 2024 - All right reserved Zeon</p>
  </aside> 
  <nav className="grid-flow-col gap-4 place-self-center justify-self-end">
   <a href="https://saahild.com/?ref=zeon-site">MySite<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></a>
  </nav>
</footer> 

    );
  } 
