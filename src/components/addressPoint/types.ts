type PropsT = {
    pointAddress?: string;
    pointId?: string;
    value?: string;
    onChange: (data: { value: string }) => Promise<void>;
    pageData?: ObjT;
    setPoint?: (id?: string, address?: string) => void;
};

type StateT = {
    currentBlock: 'point' | 'manual';
    list: string[];
    search?: string;
};

interface AddressPointI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;
    timerId?: ReturnType<typeof setTimeout>;

    addressHandler(this: AddressPointI, data: { value: string; choice?: boolean }): Promise<void>;
}

export default AddressPointI;
