# Guía de Deployment - Sell-Fy Marketing Website

## 📋 Pre-requisitos

- Cuenta en [Vercel](https://vercel.com)
- Repositorio en GitHub (recomendado) o GitLab/Bitbucket
- Node.js 18+ instalado localmente

## 🚀 Deployment en Vercel

### Opción 1: Desde GitHub (Recomendado)

1. **Crear repositorio en GitHub**
   ```bash
   # Crear nuevo repo en GitHub: sell-fy-website
   git remote add origin git@github.com:flow-state-ia/sell-fy-website.git
   git push -u origin paperclip/website
   ```

2. **Importar en Vercel**
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Selecciona "Import Git Repository"
   - Elige el repositorio `sell-fy-website`
   - Vercel detectará automáticamente Vite

3. **Configuración del Proyecto**
   - Framework Preset: Vite
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Variables de Entorno** (si aplica)
   - Ninguna requerida por ahora
   - Agregar según necesidades futuras

5. **Deploy**
   - Click en "Deploy"
   - Vercel construirá y desplegará automáticamente

### Opción 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Production deploy
vercel --prod
```

## 🔧 Configuración de Dominio Personalizado

1. En el dashboard de Vercel, ve a "Settings" > "Domains"
2. Agregar dominio personalizado (ej: `sell-fy.com`)
3. Configurar DNS según las instrucciones de Vercel

### Ejemplo de configuración DNS:

```
Tipo: A
Nombre: @
Valor: 76.76.21.21

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

## 🌿 Branch Deployment Strategy

### Configuración Recomendada:

- `main` → Production (sell-fy.com)
- `develop` → Staging (sell-fy-staging.vercel.app)
- `paperclip/*` → Preview deploys (automático)

### En Vercel Settings:

1. **Production Branch**: `main`
2. **Preview Branches**: All branches
3. **Ignored Build Step**: Configurar según necesidad

## 🔄 CI/CD Workflow

Vercel automáticamente:
- ✅ Despliega cada push a cualquier branch (preview)
- ✅ Ejecuta builds de preview para PRs
- ✅ Despliega a producción cuando se hace merge a `main`
- ✅ Genera URLs únicas para cada deploy

## 📊 Monitoreo Post-Deployment

### Métricas en Vercel:

- **Analytics**: Tráfico y performance
- **Web Vitals**: Core Web Vitals (LCP, FID, CLS)
- **Logs**: Runtime y build logs
- **Speed Insights**: Métricas de velocidad

### Comandos Útiles:

```bash
# Ver logs del último deploy
vercel logs

# Listar deploys
vercel ls

# Ver info del proyecto
vercel inspect
```

## 🐛 Troubleshooting

### Build falla:

1. Verificar que todas las dependencias estén en `package.json`
2. Revisar logs en Vercel dashboard
3. Probar build localmente: `npm run build`

### Preview deploy no aparece:

1. Verificar que GitHub integration esté activa
2. Revisar permisos del repo en Vercel

### Dominio no funciona:

1. Verificar propagación DNS (puede tardar hasta 48h)
2. Usar [dns-checker.org](https://dnschecker.org)
3. Revisar configuración SSL/TLS en Vercel

## 🔒 Seguridad

- ✅ HTTPS automático (Let's Encrypt)
- ✅ HTTP/2 habilitado por defecto
- ✅ DDoS protection incluido
- ✅ Headers de seguridad configurables

## ⚡ Optimizaciones

Vercel aplica automáticamente:
- Compresión Brotli/Gzip
- CDN global (Edge Network)
- Image optimization (con `<Image>` de Vercel)
- Static file caching

## 📱 Next Steps

1. [ ] Configurar dominio personalizado
2. [ ] Habilitar Analytics de Vercel
3. [ ] Configurar notificaciones de deployment
4. [ ] Agregar status badge al README
5. [ ] Documentar proceso de rollback

## 📚 Referencias

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)
