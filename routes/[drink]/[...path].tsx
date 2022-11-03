import { Handlers } from "$fresh/server.ts"
import { Drink } from "../../utils/signals.ts"
import Layout from "../../components/Layout.tsx"
import Calculator from "../../islands/Calculator.tsx"
import ratios from "../../data/ratios.json" assert { type: "json" };

export const handler: Handlers = {
    GET(_, ctx) {
        const drinkString = ctx.params.drink.toLowerCase().replace('%20', ' ');
        const drink = ratios.find((item: { name: string; }) => item.name === drinkString);
        
        const path = ctx.params.path.split('/');

        if (drink) {
            return ctx.render({drink: drink, servings: Number(path[0]) || 1, multiplier: Number(path[1]) || 1 });
        }
        return Response.redirect('http://localhost:8000/');
    }
}

export default function Home({ data }: { data: { drink: Drink, servings: number, multiplier: number}}) {
    return (
    <Layout>
        <Calculator drink={data.drink} servings={data.servings} multiplier={data.multiplier}/>
    </Layout>
    )
}