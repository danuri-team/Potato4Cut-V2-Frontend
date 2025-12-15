<script lang="ts">
  import { css } from "../../styled-system/css";
  import IconDownload from "~icons/lucide/download";
  import IconChevronRight from "~icons/lucide/chevron-right";

  const containerStyle = css({
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "main.50",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingX: "16px",
    paddingY: "24px",
    md: {
      paddingX: "24px",
      paddingY: "40px",
    },
  });

  const backgroundGradientStyle = css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "150vmax",
    height: "150vmax",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, token(colors.main.200) 0%, token(colors.main.50) 40%)",
    opacity: 0.6,
    pointerEvents: "none",
  });

  const characterStyle = css.raw({
    position: "absolute",
    pointerEvents: "none",
    zIndex: 0,
  });

  const characterTopLeftStyle = css(characterStyle, {
    top: "15%",
    left: "-5%",
    width: "20vw",
    minWidth: "60px",
    maxWidth: "250px",
    transform: "rotate(-15deg)",
    md: {
      top: "10%",
      left: "5%",
    },
  });

  const characterTopRightStyle = css(characterStyle, {
    top: "8%",
    right: "-8%",
    width: "18vw",
    minWidth: "50px",
    maxWidth: "200px",
    transform: "rotate(15deg)",
    md: {
      top: "5%",
      right: "5%",
    },
  });

  const characterBottomLeftStyle = css(characterStyle, {
    bottom: "8%",
    left: "-12%",
    width: "28vw",
    minWidth: "80px",
    maxWidth: "380px",
    transform: "rotate(-15deg)",
    md: {
      bottom: "5%",
      left: "0%",
    },
  });

  const characterBottomRightStyle = css(characterStyle, {
    bottom: "5%",
    right: "-10%",
    width: "30vw",
    minWidth: "90px",
    maxWidth: "400px",
    transform: "rotate(15deg)",
    md: {
      bottom: "3%",
      right: "0%",
    },
  });

  const contentWrapperStyle = css({
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    width: "100%",
    maxWidth: "380px",
    md: {
      gap: "36px",
    },
  });

  const mainContentStyle = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "24px",
    width: "100%",
    md: {
      gap: "40px",
    },
  });

  const buttonGroupStyle = css({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "100%",
  });

  const outlinedButtonStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    width: "100%",
    paddingX: "28px",
    paddingY: "12px",
    border: "1px solid token(colors.label.strong)",
    borderRadius: "12px",
    backgroundColor: "transparent",
    fontSize: "16px",
    fontWeight: "600",
    color: "label.strong",
    cursor: "pointer",
    lineHeight: "[1.5]",
    transition: "background-color 0.2s",
    _hover: {
      backgroundColor: "rgba(0, 0, 0, 0.05)",
    },
  });

  const filledButtonStyle = css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    width: "100%",
    paddingX: "28px",
    paddingY: "12px",
    border: "none",
    borderRadius: "12px",
    backgroundColor: "label.strong",
    fontSize: "16px",
    fontWeight: "600",
    color: "static.white",
    cursor: "pointer",
    lineHeight: "[1.5]",
    transition: "background-color 0.2s",
    _hover: {
      backgroundColor: "label.normal",
    },
  });
</script>

<div class={containerStyle}>
  <div class={backgroundGradientStyle}></div>

  <img src="/character-1.svg" alt="" class={characterTopLeftStyle} />
  <img src="/character-2.svg" alt="" class={characterTopRightStyle} />
  <img src="/character-3.svg" alt="" class={characterBottomLeftStyle} />
  <img src="/character-4.svg" alt="" class={characterBottomRightStyle} />

  <div class={contentWrapperStyle}>
    <img src="/logo.svg" alt="감자네컷" />

    <div class={mainContentStyle}>
      <div class={buttonGroupStyle}>
        <button type="button" class={outlinedButtonStyle}>
          <span>다운로드</span>
          <IconDownload />
        </button>
        <button type="button" class={filledButtonStyle}>
          <span>나도 찍으러가기</span>
          <IconChevronRight />
        </button>
      </div>
    </div>
  </div>
</div>
