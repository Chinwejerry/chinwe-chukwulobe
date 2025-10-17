const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-100 via-slate-300 to-slate-400 text-purple-900 footer sm:footer-horizontal  items-center p-4 relative bottom-0 w-full  flex justify-center ">
      <aside className="grid-flow-col items-center  flex justify-between gap-2">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
    </footer>
  );
};

export default Footer;
