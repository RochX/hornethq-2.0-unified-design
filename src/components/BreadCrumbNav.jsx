import { Link, useLocation } from "react-router-dom";

function BreadCrumbNav() {
  // slice to remove the starting '/'
  const locationArray = useLocation().pathname.slice(1).split("/");

  let pathnameArray = []
  for (let i = 0; i < locationArray.length; i++) {
    if (i === 0) {
      pathnameArray.push("/" + locationArray[i]);
    }
    else {
      pathnameArray.push(pathnameArray[i-1] + "/" + locationArray[i]);
    }
  }
  // add home path to beginning if not already present
  if (pathnameArray[0] !== "/home") {
    pathnameArray.splice(0, 0, "/home");
  }
  // map all path elements into navigation links
  const navButtons = pathnameArray.map((pathname, index) =>
    { if (index !== pathnameArray.length-1)
        return <span>{(index ? ' > ' : '')} <Link to={pathname} key={`nav-path-${index}`}>{pathname.slice(pathname.lastIndexOf("/")+1)}</Link></span>
      else 
        return (index ? ' > ' : '') + pathname.slice(pathname.lastIndexOf("/")+1)
    }
  );

  return (
    <span>{navButtons}</span>
  )
};

export default BreadCrumbNav;