import React from "react";
import { useState } from "react";
import style from "./suggestions.module.css";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSpring, animated } from "@react-spring/web";

export default function Suggestions() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.suggest}>
            <h2>Brewing Guide</h2>
            <p>
              Reprehenderit ipsum pariatur consequat magna occaecat culpa
              tempor. Officia irure reprehenderit adipisicing consequat
              adipisicing et.
            </p>
            <div>
              <h3 onClick={handleOpen}>Read More -&gt; </h3>
              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    TransitionComponent: Fade,
                  },
                }}
              >
                <Fade in={open}>
                  <Box className={style.boxStyle}>
                    <Typography
                      id="spring-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.though ridiculed by those who are naturally coarse
                      in their nervous sensibilities, will always be the
                      favorite beverage of the intellectual.though ridiculed by
                      those who are naturally coarse in their nervous
                      sensibilities, will always be the favorite beverage of the
                      intellectual.though ridiculed by those who are naturally
                      coarse in their nervous sensibilities, will always be the
                      favorite beverage of the intellectual.though ridiculed by
                      those who are naturally coarse in their nervous
                      sensibilities, will always be the favorite beverage of the
                      intellectual
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div class={style.imagewrapper}>
            <img src="/menu/picsec1.jpeg" alt="Image 1" />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.suggest}>
            <h2>Brewing Guide</h2>
            <p>
              Reprehenderit ipsum pariatur consequat magna occaecat culpa
              tempor. Officia irure reprehenderit adipisicing consequat
              adipisicing et.
            </p>
            <div>
              <h3 onClick={handleOpen}>Read More -&gt; </h3>
              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    TransitionComponent: Fade,
                  },
                }}
              >
                <Fade in={open}>
                  <Box className={style.boxStyle}>
                    <Typography
                      id="spring-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.though ridiculed by those who are naturally coarse
                      in their nervous sensibilities, will always be the
                      favorite beverage of the intellectual.though ridiculed by
                      those who are naturally coarse in their nervous
                      sensibilities, will always be the favorite beverage of the
                      intellectual.though ridiculed by those who are naturally
                      coarse in their nervous sensibilities, will always be the
                      favorite beverage of the intellectual.though ridiculed by
                      those who are naturally coarse in their nervous
                      sensibilities, will always be the favorite beverage of the
                      intellectual
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div class={style.imagewrapper}>
            <img src="/menu/picsec1.jpeg" alt="Image 1" />
          </div>
        </div>
        <div className={style.box}>
          <div className={style.suggest}>
            <h2>Brewing Guide</h2>
            <p>
              Reprehenderit ipsum pariatur consequat magna occaecat culpa
              tempor. Officia irure reprehenderit adipisicing consequat
              adipisicing et.
            </p>
            <div>
              <h3 onClick={handleOpen}>Read More -&gt; </h3>
              <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    TransitionComponent: Fade,
                  },
                }}
              >
                <Fade in={open}>
                  <Box className={style.boxStyle}>
                    <Typography
                      id="spring-modal-title"
                      variant="h6"
                      component="h2"
                    >
                      Text in a modal
                    </Typography>
                    <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor
                      ligula.though ridiculed by those who are naturally coarse
                      in their nervous sensibilities, will always be the
                      favorite beverage of the intellectual.though ridiculed by
                      those who are naturally coarse in their nervous
                      sensibilities, will always be the favorite beverage of the
                      intellectual.though ridiculed by those who are naturally
                      coarse in their nervous sensibilities, will always be the
                      favorite beverage of the intellectual.though ridiculed by
                      those who are naturally coarse in their nervous
                      sensibilities, will always be the favorite beverage of the
                      intellectual
                    </Typography>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
        </div>
        <div className={style.box}>
          <div class={style.imagewrapper}>
            <img src="/menu/picsec1.jpeg" alt="Image 1" />
          </div>
        </div>
      </div>
      <div className={style.qoute}>
        <div className={style.mark}>"</div>
        <p>
          "Tea, though ridiculed by those who are naturally coarse in their
          nervous sensibilities, will always be the favorite beverage of the
          intellectual."
        </p>
        <span> - Thomas De Quincey.</span>
      </div>
    </div>
  );
}

const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const boxStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
