export const guestList = ["QWx6aXJtZXNtbw==", "S2Vzc2luaGEsIG1ldSBhbW9y"];
export const checkInvitation = () => {
  const query = new URLSearchParams(window.location.search);
  const inviteHash = query.get("invite");

  if (!inviteHash) {
    return handleNotInvited();
  }
  try {
    if (!guestList.includes(inviteHash)) {
        return handleNotInvited();
    }

    const decodedName = atob(inviteHash);
    return decodedName;
  } catch (e) {
    handleNotInvited();
  }
};

export const handleNotInvited = () => {
  alert("Você não foi convidado");
  document.body.innerHTML = "";
};
