import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
    title: string | undefined
    value: string | number | undefined
    description: string | undefined
}

export function StatCard({ title, value, description }: StatCardProps) {
    return (
        <Card className="text-center">
            <CardContent className="p-6">
                <div className="space-y-1">
                    <h3 className="text-xl font-medium text-white">{title}</h3>
                </div>
                <div className="mt-4 space-y-2">
                    <div className="text-4xl font-bold text-white">
                        {typeof value === "number" ? value.toLocaleString() : value}
                    </div>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
            </CardContent>
        </Card>
    )
}