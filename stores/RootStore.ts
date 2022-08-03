import { Container } from 'inversify'
import { UserStore } from './UserStore'
import { ModalStore } from './ModalStore'
import { useMemo } from 'react'
import { Web3Store } from "./Web3Store";

export class RootStore {
	public userStore: UserStore
	public container: Container
	public modalStore: ModalStore
	public web3Store: Web3Store;

	public constructor() {
		this.userStore = new UserStore(this)
		this.modalStore = new ModalStore(this)
		this.web3Store = new Web3Store(this);
		this.container = new Container()
		this.container.bind(UserStore).toConstantValue(this.userStore)
		this.container.bind(ModalStore).toConstantValue(this.modalStore)
		this.container.bind(Web3Store).toConstantValue(this.web3Store);
		this.container.bind(Container).toConstantValue(this.container)
	}
}

function initializeStore(initialData: unknown = null) {
	let store
	const _store = store ?? new RootStore()
	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store
	// Create the store once in the client
	if (!store) store = _store
	return _store
}

export function useStore(initialState?: unknown) {
	const store = useMemo(() => initializeStore(initialState), [initialState])
	return store
}
