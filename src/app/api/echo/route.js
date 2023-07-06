export async function GET(request) {
    const { searchParams } = new URL(request.url)
    // const name = searchParams.get('name')
    // const age = searchParams.get('age')

    // const entries = new Map([
    //     ['foo', 'bar'],
    //     ['baz', 42]
    //   ]);

    const obj = Object.fromEntries(searchParams)

    return Response.json(obj)
}