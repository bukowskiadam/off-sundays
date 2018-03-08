import React from 'react';

import style from './index.module.css';

export default () => (
    <div className={style.container}>
        <h4>Czy wszystkie sklepy są zamknięte?</h4>
        <p>
            Nie. Otwarte mogą być np. stacje benzynowe, kwiaciarnie, piekarnie, apteki, kioski, sklepy z pamiątkami,
            sklepy na dworcach. Wszystkie wyjątki wymienione są w ustawie.
        </p>
        <h4>Restauracje też są zamknięte?</h4>
        <p>Nie. Ustawa dotyczy tylko placówek handlowych, a nie usługowych.</p>
        <h4>Co z małymi sklepikami?</h4>
        <p>
            W placówkach handlowych, w których handel jest prowadzony przez przedsiębiorcę będącego osobą fizyczną
            wyłącznie osobiście, we własnym imieniu i na własny rachunek zakaz nie obowiązuje.
        </p>
    </div>
);
