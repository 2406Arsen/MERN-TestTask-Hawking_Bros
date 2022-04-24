import axios from 'axios'

export const getAllMessengers = () =>
	axios.get('http://localhost:5000/api/messengers').then((res) => res.data)

export const getOneMessenger = (id: string) =>
	axios.get(`http://localhost:5000/api/messengers/${id}`).then((res) => res.data[0])

export const getAllInternetData = () =>
	axios.get('http://localhost:5000/api/internet').then((res) => res.data)
export const getOneInternet = (count: number) =>
	axios.get(`http://localhost:5000/api/internet/${count}`).then((res) => res.data[0])

export const getAllMinutesData = () =>
	axios.get('http://localhost:5000/api/minutes').then((res) => res.data)

export const getMinuteData = (count: number) =>
	axios.get(`http://localhost:5000/api/minutes/${count}`).then((res) => res.data[0])

export const getAllMessagesData = () =>
	axios.get('http://localhost:5000/api/messages').then((res) => res.data)
export const getOneMessage = (count: number): Promise<{ count: number; basePrice: number }> =>
	axios.get(`http://localhost:5000/api/messages/${count}`).then((res) => res.data[0])

export const getAllMoreServicesData = () =>
	axios.get('http://localhost:5000/api/moreServices').then((res) => res.data)

export const fetOneService = (id: string) =>
	axios.get(`http://localhost:5000/api/moreServices/${id}`).then((res) => res.data[0])

export const getAllSocialData = () =>
	axios.get('http://localhost:5000/api/social').then((res) => res.data)

export const getOneSocial = (id: string) =>
	axios.get(`http://localhost:5000/api/social/${id}`).then((res) => res.data[0])
