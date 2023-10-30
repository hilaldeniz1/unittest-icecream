import { fireEvent, render, screen } from "@testing-library/react";
import Form from ".";
import userEvent from "@testing-library/user-event";

test("koşulların onaylanmasına göre buton aktifliği", async () => {
  // test bileşenini ekrana basma (sanal)
  render(<Form />);
  // user'ın kurulumunu yap
  const user = userEvent.setup();

  // gerekli elemanları alma
  const orderBtn = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  // buton başlangıçta inaktiftir
  expect(orderBtn).toBeDisabled();

  // cheboxi tikle
  await user.click(checkBox);

  // buton aktif mi kontrol et
  expect(orderBtn).toBeEnabled();

  // cheboxtan tiki kaldır
  await user.click(checkBox);

  // buton başlangıçta inaktiftir
  expect(orderBtn).toBeDisabled();
});

test("onayla butonu hover  olunca bildirim çıkar", async () => {
  render(<Form />);
  const user = userEvent.setup();

  // gerekli elemanlar
  const chekbox = screen.getByRole("checkbox");
  const button = screen.getByRole("button");

  // butonu aktif yap
  await user.click(chekbox);

  // mouse'u butonun üzerine getir
  fireEvent.mouseEnter(button);

  //  popup'ı çağırma
  const popup = screen.getByText("Size gerçekten", { exact: false });

  // bidlirim gözüküyor mu ?
  expect(popup).toBeVisible();

  // mouse'u butondan çek
  fireEvent.mouseLeave(button);

  // popup görünür değildir
  expect(popup).not.toBeVisible();
});
