import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const VideoCta = () => {
    const finalCtaImage = PlaceHolderImages.find((p) => p.id === 'final-cta-gif');
  return (
    <section id="video-cta" className="py-16 sm:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl mb-8">
          Sua Jornada Começa Agora
        </h2>
        <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-primary/20">
          {finalCtaImage && (
            <Image
                src={finalCtaImage.imageUrl}
                alt={finalCtaImage.description}
                width={600}
                height={600}
                unoptimized
                className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="mt-8">
           <Button asChild size="lg" className="w-full sm:w-auto h-16 text-base md:text-xl font-bold">
                <Link href="https://www.ggcheckout.com/checkout/v2/VU1EHbdkknKfUXU3JXCx">QUERO ACESSO IMEDIATO POR R$9,90</Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoCta;