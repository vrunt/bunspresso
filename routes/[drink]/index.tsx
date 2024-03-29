import { Handlers } from "$fresh/server.ts"
import { Drink } from "../../utils/signals.ts"
import Layout from "../../components/Layout.tsx"
import Calculator from "../../islands/Calculator.tsx"
import ratios from "../../data/ratios.json" assert { type: "json" };

export const handler: Handlers = {
    GET(_, ctx) {
        const drinkString = ctx.params.drink.toLowerCase().replace('%20', ' ');
        const drink = ratios.find((item: { name: string; }) => item.name === drinkString);

        if (drink) {
            return ctx.render({drink: drink});
        }
        return Response.redirect('http://localhost:8000/');
    }
}

export default function Home({ data }: { data: { drink: Drink}}) {
    return (
    <Layout>
        <Calculator drink={data.drink}/>
    </Layout>
    )
}