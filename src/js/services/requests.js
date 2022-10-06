const postData = async (url, data) => {

    // fetch возвращает промис (который нужно ещё раз обработать)
    // fetch - асинхронная операция
    // await - куы получит результат только после выполнения fetch
    let res = await fetch(url, {
        method: 'POST',
        body: data,
    });

    // return происходит только после выполнения res.text();
    return await res.text();
};

const getResourse = async (url) => {

    let res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export { postData, getResourse };