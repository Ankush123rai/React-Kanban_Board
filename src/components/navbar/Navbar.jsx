import React from "react";
import style from "./Navbar.module.css";


const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbarLeft}>
        <img
          className={style.navbarImg}
          src="https://public-files.gumroad.com/f7o3inoeloo0cxh572go242z2q4v"
        />
        <h2 className={style.navbarItem}>KanBan</h2>
        <h3 className={style.navbarItem}>WorkSpaces</h3>
        <h3 className={style.navbarItem}>Recent</h3>
        <h3 className={style.navbarItem}>Stared</h3>
        <h3 className={style.navbarItem}>Tamplets</h3>
        <button className={style.navbarBtn}>Create</button>
      </div>

      <div className={style.navbarRight}>
        
          <input className={style.navbarSearch} type="text" placeholder="Search" />
      
        <img
          className={style.userImage}
          src="https://img.freepik.com/premium-psd/3d-cartoon-character-avatar-isolated-3d-rendering_235528-554.jpg?w=2000"
          alt="user"
          width="50px"
          height="50px"
        />
      </div>
    </div>
  );
};

export default Navbar;