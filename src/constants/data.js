// Simulação do banco de dados para uma loja de roupas
const clothingStoreDatabase = {
    categories: [
        { id: 1, name: 'Roupas Masculinas', created_at: new Date(), updated_at: new Date() },
        { id: 2, name: 'Roupas Femininas', created_at: new Date(), updated_at: new Date() },
        { id: 3, name: 'Acessórios', created_at: new Date(), updated_at: new Date() },
        { id: 4, name: 'Calçados', created_at: new Date(), updated_at: new Date() },
    ],
    products: [
        { id: 1, name: 'Camisa Polo', description: 'Camisa polo de algodão', price: 49.99, category_id: 1, created_at: new Date(), updated_at: new Date() },
        { id: 2, name: 'Calça Jeans', description: 'Calça jeans confortável', price: 89.99, category_id: 1, created_at: new Date(), updated_at: new Date() },
        { id: 3, name: 'Vestido Floral', description: 'Vestido leve e arejado', price: 79.99, category_id: 2, created_at: new Date(), updated_at: new Date() },
        { id: 4, name: 'Saia Midi', description: 'Saia midi elegante', price: 59.99, category_id: 2, created_at: new Date(), updated_at: new Date() },
        { id: 5, name: 'Cinto de Couro', description: 'Cinto de couro genuíno', price: 39.99, category_id: 3, created_at: new Date(), updated_at: new Date() },
        { id: 6, name: 'Tênis Esportivo', description: 'Tênis confortável para atividades físicas', price: 129.99, category_id: 4, created_at: new Date(), updated_at: new Date() },
    ],
    orders: [
        { id: 1, total: 239.97, status: 'PAID', created_at: new Date(), updated_at: new Date() },
        { id: 2, total: 59.99, status: 'PENDING', created_at: new Date(), updated_at: new Date() },
    ],
    order_items: [
        { id: 1, order_id: 1, product_id: 1, quantity: 1, price: 49.99 },
        { id: 2, order_id: 1, product_id: 2, quantity: 1, price: 89.99 },
        { id: 3, order_id: 1, product_id: 5, quantity: 1, price: 39.99 },
        { id: 4, order_id: 2, product_id: 3, quantity: 1, price: 79.99 },
    ]
};

export { clothingStoreDatabase };