"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="ton" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="ton">Ton</TabsTrigger>
        <TabsTrigger value="infinity-pay">Infinity Pay</TabsTrigger>
        <TabsTrigger value="pagbank">PagBank</TabsTrigger>
      </TabsList>
      <TabsContent value="ton">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Seu cupom Ton está aqui
            </CardTitle>
            <CardDescription className="text-center">
              Utilize o link abaixo para realizar a compra da sua maquininha Ton
              com desconto.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 flex justify-center">
            <Button className="hover:bg-[#00D700] hover:text-white rounded-full">
              Ir para o Ton
              <a
                href="https://www.ton.com.br/catalogo/?referrer=66EF56D2-3A0D-4DEB-8015-A4BDB55FC612&utm_medium=invite_share&utm_source=revendedor"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="infinity-pay">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Seu cupom Infinity Pay está aqui
            </CardTitle>
            <CardDescription className="text-center">
              Utilize o link abaixo para realizar a compra da sua maquininha
              Infinity Pay.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 flex justify-center">
            <Button className="hover:bg-[#121212] hover:text-white hover:border-2 rounded-full">
              Ir para Infinity Pay
              <a
                href="https://www.infinitepay.io/?rid=leonardo_alcantara23"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="pagbank">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Seu cupom PagBank está aqui
            </CardTitle>
            <CardDescription className="text-center">
              Utilize o link abaixo para realizar a compra da sua maquininha
              PagBank com desconto.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 flex justify-center">
            <Button className="hover:bg-[#1bb99a] rounded-full">
              Ir para PagBank
              <a
                href="https://pagbank.vc/indica-maquininhas-db7796322"
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
