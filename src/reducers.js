import { NOT_EKLE, NOT_SIL } from "./actions";

const key = "s10ch";

const baslangicDegerleri = {
	notlar: [
		{
			id: "75g1IyB8JLehAr0Lr5v3p",
			date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
			body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
		},
	],
};

function localStorageStateYaz(key, data) {
	localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
	return JSON.parse(localStorage.getItem(key));
}

export function baslangicNotlariniGetir(key) {
	const eskiNotlar = localStorage.getItem(key);

	if (eskiNotlar) {
		return localStorageStateOku(key);
	} else {
		return baslangicDegerleri;
	}
}

export function reducer(state = baslangicDegerleri, action) {
	switch (action.type) {
		case NOT_EKLE:
			const updatedState = {
				...state,
				notlar: [...state.notlar, JSON.parse(action.payload)],
			};
			localStorageStateYaz(key, updatedState);
			return updatedState;

		case NOT_SIL:
			console.log(action.payload);
			const removedState = {
				...state,
				notlar: state.notlar.filter((not) => not.id !== action.payload),
			};
			localStorageStateYaz(key, removedState);
			return removedState;
		default:
			return state;
	}
}
