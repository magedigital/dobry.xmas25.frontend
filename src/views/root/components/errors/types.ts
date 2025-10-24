type PropsT = {};

type StateT = {
    errors: ErrorT[];
};

type ErrorT = { _id: string; text: string; type: 'error' | 'success' | 'info' };

interface ErrorsI extends React.Component<PropsT, StateT> {
    props: PropsT;
    state: StateT;

    parent: React.RefObject<HTMLDivElement | null>;

    timers: Record<string, ReturnType<typeof setTimeout>>;

    errorHandler(
        this: ErrorsI,
        e: { detail: { id: string; text?: string; action?: 'delete'; type: ErrorT['type'] } },
    ): Promise<void>;
}

export default ErrorsI;
export type { ErrorT };
