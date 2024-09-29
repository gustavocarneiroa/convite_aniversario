import { variations } from "./messageFragments";

const bp = [
  {
    id: "QWx6aXI6IGNoYXBpbmhhIPCfq7M",
    variation: 0,
  },
  {
    id: "TGVsZSBkZSBiaWtlIPCfkIrwn5qy",
    variation: 0,
  },
  {
    id: "VmFuZXNzw6NvIPCfprc",
    variation: 1,
  },
  {
    id: "QmllbCBDYXN0aWVsIPCfjrg",
    variation: 1,
  },
  {
    id: "QmlhIPCfjYogQ2FldGFubw",
    variation: 2,
  },
  {
    id: "U2hhbmRsZXnwn6SWMjA3Nw",
    variation: 0,
  },
  {
    id: "U3RhcmRldyBNYXJ5IA",
    variation: 1,
  },
  {
    id: "QXp1bMOjbyDwn5C6",
    variation: 0,
  },
].map((i) => {
  return { ...i, location: 0 };
});
const subs = [
  { id: "S2Vzc2luaGEsIG1ldSBhbW9y", variation: 5 },
  { id: "UPCfj4BTYW50YW5h", variation: 3 },
  { id: "RmlzaW9SYW5uYWjwn5Kq", variation: 4 },
  { id: "QmlhbnF1aW5oYQ", variation: 4 },
  { id: "VmljZW50aW5obyBsaW5kbyBiZWxv", variation: 3 },
  { id: "QmFiaSDwn5CI4oCN4qyb", variation: 4 },
  { id: "QW5kcsOpIPCfkIjigI3irJs", variation: 4 },
  { id: "R2FiaSDwn5C6", variation: 3 },
  { id: "RWQgJiBLZWNpYQ", variation: 4 },
  { id: "RmVybmFuZG8gRG90aW5ldGU", variation: 3 },
  { id: "Q2Fyb2wgZGUgQ3VsdHVyYSDwn5qQ", variation: 2 },
  {
    id: "Um9iZXJ0aW5obywgw7puaWNvIGV4LWRpYWLDqXRpY28gZXhpc3RlbnRl",
    variation: 3,
  },
  { id: "VGFpc2luaGHwn6SPRHV0cmE", variation: 4 },
  { id: "VGFpbmHwn5OjRHV0cmE", variation: 4 },
  { id: "VmFsYnVzYSDwn5GS", variation: 4 },
  { id: "TW9yZ2FuYfCfjJkg", variation: 4 },
  { id: "Vml0b3Jpbmhh", variation: 4 },
  { id: "UGF1bG8gU2VycGEsIGRvIDQwMw", variation: 4 },
  { id: "Q2FqYUJhbGF0ZW5zYSDwn5GKLCBBS0EgQ2Fqw6EgSmVmZg", variation: 4 },
  { id: "SmF5LCBhcXVlbGEgZGHwn46Z77iPdm96IHBvdGVudGU", variation: 4 },
  { id: "4pqhY2FqYWx6cuKaoQ", variation: 3 },
  { id: "cGFsaW1wc2VzdGFsIHwgY2FtaWxvaWRlcw", variation: 4 },
  { id: "YnJ1bm8gfCBiZW56aW5obw", variation: 4 },
  { id: "VmlkYWx6ZXJhIPCfp5HigI3wn5K7", variation: 4},
].map((i) => {
  return { ...i, location: 1 };
});

const locations = [{
  url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3566224706346!2d-38.572696225257864!3d-3.7322146431910657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74b2c081cdbfd%3A0xb67a6a6339f70ec6!2sParque%20Rachel%20de%20Queiroz%20PK!5e0!3m2!1spt-BR!2sbr!4v1726412882586!5m2!1spt-BR!2sbr",
  name: "Parque Rachel de Queiroz",
  dateAndHour: "Dia 30/09 às 19:30",
  eventLink: "https://calendar.app.google/qm6BAHjYdmDYpo4E6",
}, {
  url: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15925.268301852395!2d-38.5627459!3d-3.7409291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749d6134a7c21%3A0x88956cd3de7a9324!2sGeek%20Bunker%20Burger%20(Parquel%C3%A2ndia)!5e0!3m2!1spt-BR!2sbr!4v1726185071679!5m2!1spt-BR!2sbr",
  name: "Geek Bunk Burguer - Parquelândia",
  dateAndHour: "Dia 29/09 às 19:00",
  eventLink: "https://calendar.app.google/jyUaGgnN2brpxgQH7",
}];


export const allGuests = [...bp, ...subs];
export const guestIdList = allGuests.map( guest => guest.id);
export const checkInvitation = () => {
  const query = new URLSearchParams(window.location.search);
  const inviteHash = query.get("invite");

  if (!inviteHash) {
    handleNotInvited();
    return {};
  }
  try {
    if (!guestIdList.includes(inviteHash)) {
      handleNotInvited();
    }

    const decodedName = decodeURIComponent(escape(atob(inviteHash)));
    return { 
      decodedName,
      inviteHash,
    };
  } catch (e) {
    handleNotInvited();
  }
};

export const handleNotInvited = () => {
  alert("Você não foi convidado");
  document.body.innerHTML = "";
  throw new Error("Você não foi convidado")
};

export function getLocation(hash: string) {
  const invited = [...bp, ...subs].find(({ id }) => id == hash)!;
  return locations[invited.location];
}