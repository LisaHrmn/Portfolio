import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const links = [
    { name: "Home", to: "/", id: 1 },
    { name: "Portfolio", to: "/portfolio", id: 2 },
    { name: "About", to: "/about", id: 3 },
    { name: "Contact", to: "/contact", id: 4 }
  ];

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1
      }
    }
  };

  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };

function NavAlt() {
    const [open, cycleOpen] = useCycle(false, true);
    return (
    <main className="nav-container">
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ 
                width: 0,
                height: 0
            }}
            animate={{
              width: "100vw",
              transition: { delay: 0.2, duration: 0.5 }
            }}
            exit={{
              width: 0,
              height: 0,
              transition: { delay: 0.2, duration: 0.5 }
            }}
          >
            <motion.div
              className="nav-list"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              {links.map(({ name, to, id }) => (
                <motion.a
                    className="nav-list-items"
                    key={id}
                    href={to}
                    whileHover={{ scale: 1 }}
                    variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
        <div className="nav-btn-container">
            <button onClick={cycleOpen}>{open ? <i className={"fa-solid fa-xmark fa-lg"}></i> : <i className={"fa-solid fa-bars fa-lg"}></i>}</button>
        </div>
    </main>
    );
    }

export default NavAlt;
